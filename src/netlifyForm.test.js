import { submitNetlifyForm } from "./netlifyForm";

describe("submitNetlifyForm", () => {
  afterEach(() => {
    delete global.fetch;
  });

  test("posts the form name and fields as url-encoded data", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, status: 200 });
    await submitNetlifyForm("contact", { name: "Ada", email: "ada@example.com" });
    const [url, options] = global.fetch.mock.calls[0];
    expect(url).toBe("/");
    expect(options.method).toBe("POST");
    expect(options.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");
    const body = new URLSearchParams(options.body);
    expect(body.get("form-name")).toBe("contact");
    expect(body.get("name")).toBe("Ada");
    expect(body.get("email")).toBe("ada@example.com");
  });

  test("throws when the server does not accept the submission", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 404 });
    await expect(submitNetlifyForm("contact", {})).rejects.toThrow("404");
  });
});
