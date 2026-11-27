import React, { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { trackEvent } from "../../analytics"
import { db } from "../../firebase"
import Back from "../common/back/Back"
import "./feedback.css"

const CATEGORIES = [
  "Courses & classes",
  "Teachers & tutors",
  "Website & learning platform",
  "Suggestion / new idea",
  "Complaint",
  "Other",
]

const MAX_MESSAGE = 2000

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: CATEGORIES[0],
    message: "",
    website: "", // honeypot: real visitors never see or fill this
  })
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return // bot: silently ignore
    if (!form.message.trim()) return

    setStatus("sending")
    try {
      await addDoc(collection(db, "lgi-feedback"), {
        name: form.name.trim(),
        email: form.email.trim(),
        category: form.category,
        rating,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      })
      setStatus("sent")
      trackEvent("feedback_submit", { category: form.category, rating })
    } catch (err) {
      console.error("Feedback submit failed:", err)
      setStatus("error")
    }
  }

  const reset = () => {
    setForm({ name: "", email: "", category: CATEGORIES[0], message: "", website: "" })
    setRating(0)
    setStatus("idle")
  }

  return (
    <>
      <Back title="Feedback" />
      <section className="feedback padding">
        <div className="container shadow feedback-card">
          {status === "sent" ? (
            <div className="feedback-thanks">
              <h1>Thank you!</h1>
              <p>
                Your feedback has been received. It helps us improve LGI for every learner.
              </p>
              <button type="button" className="primary-btn" onClick={reset}>
                SEND MORE FEEDBACK
              </button>
            </div>
          ) : (
            <>
              <h1>Share your feedback</h1>
              <p className="feedback-intro">
                Tell us what is working and what we can do better. Name and email are optional.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="feedback-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name (optional)"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    autoComplete="name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={150}
                    autoComplete="email"
                  />
                </div>

                <label className="feedback-label" htmlFor="category">
                  What is your feedback about?
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <span className="feedback-label">How would you rate your experience?</span>
                <div className="feedback-stars" role="radiogroup" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={rating === n}
                      aria-label={`${n} out of 5`}
                      className={n <= (hover || rating) ? "star on" : "star"}
                      onClick={() => setRating(n === rating ? 0 : n)}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <textarea
                  name="message"
                  rows="8"
                  placeholder="Write your feedback here..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={MAX_MESSAGE}
                  required
                />
                <div className="feedback-count">
                  {form.message.length}/{MAX_MESSAGE}
                </div>

                {/* Honeypot field, hidden from people */}
                <input
                  type="text"
                  name="website"
                  className="feedback-hp"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {status === "error" && (
                  <p className="feedback-error">
                    Sorry, something went wrong and your feedback was not sent. Please try again,
                    or email us at{" "}
                    <a href="mailto:info@lgifoundation.org">info@lgifoundation.org</a>.
                  </p>
                )}

                <button
                  type="submit"
                  className="primary-btn"
                  disabled={status === "sending" || !form.message.trim()}
                >
                  {status === "sending" ? "SENDING..." : "SEND FEEDBACK"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Feedback
