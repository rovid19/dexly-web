import React, { useState } from "react";
import FadeIn from "./FadeIn";
import emailjs from "@emailjs/browser";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactUs = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [showForm, setShowForm] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) {
      e.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "roberto.vidovic0@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `bg-dark2 border rounded-xl px-4 py-3 text-light1 placeholder-light3 focus:outline-none transition-colors ${
      errors[field] ? "border-danger" : "border-dark3 focus:border-accent1"
    }`;

  return (
    <FadeIn direction="up" duration={600}>
      <div className="w-full flex flex-col items-center justify-center py-24 px-4">
        <div className="w-full max-w-2xl">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent1 mb-3 text-center">
            Get in touch
          </h2>
          <h1 className="text-5xl font-bold text-light1 mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-light3 mb-8 text-base text-center">
            Have a question or want to work together? Fill out the form and
            we'll get back to you shortly.
          </p>

          {!showForm && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-accent1 text-dark1 font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send us a message
              </button>
            </div>
          )}

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-light2 font-medium">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={inputClass("firstName")}
                  />
                  {errors.firstName && (
                    <span className="text-danger text-xs mt-0.5">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-light2 font-medium">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={inputClass("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-danger text-xs mt-0.5">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-light2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <span className="text-danger text-xs mt-0.5">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-light2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={inputClass("subject")}
                />
                {errors.subject && (
                  <span className="text-danger text-xs mt-0.5">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-light2 font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <span className="text-danger text-xs mt-0.5">
                    {errors.message}
                  </span>
                )}
              </div>

              {status === "success" && (
                <p className="text-accent1 text-sm bg-accent1/10 border border-accent1/30 rounded-xl px-4 py-3">
                  Message sent! We'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-danger text-sm bg-danger/10 border border-danger/30 rounded-xl px-4 py-3">
                  Something went wrong. Please try again later.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 bg-accent1 text-dark1 font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default contactUs;
