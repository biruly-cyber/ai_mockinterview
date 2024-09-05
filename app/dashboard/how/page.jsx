// pages/how-it-works.js
import React from "react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">How It Works</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          1. Set Up Your Interview
        </h2>
        <p className="text-lg">
          <strong>Choose Your Job Position:</strong> Start by selecting the job
          role you're preparing for (e.g., Frontend Developer, Backend
          Developer, Data Scientist).
        </p>
        <p className="text-lg">
          <strong>Select Your Tech Stack:</strong> Pick the relevant
          technologies for the position (e.g., React, Node.js, Python, etc.).
        </p>
        <p className="text-lg">
          <strong>Specify Your Experience:</strong> Provide your years of
          experience to tailor the difficulty and relevance of the questions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Generate Interview Questions
        </h2>
        <p className="text-lg">
          Based on the information provided, the AI will generate{" "}
          <strong>5 personalized interview questions</strong>. Each question
          will be accompanied by model answers to help you understand the
          expected response.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          3. Start the Mock Interview
        </h2>
        <p className="text-lg">
          You have the option to{" "}
          <strong>enable your camera and microphone</strong> to simulate a
          real-life interview experience. This is optional but can add to the
          immersion.
        </p>
        <p className="text-lg">
          You'll be prompted to answer each of the 5 questions as if you were in
          an actual interview.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Get Feedback and Rating
        </h2>
        <p className="text-lg">
          Once the interview is completed, the AI will analyze your responses by
          comparing them with the correct answers.
        </p>
        <p className="text-lg">
          You'll receive a <strong>rating</strong> based on the accuracy, depth,
          and relevance of your answers, along with detailed{" "}
          <strong>feedback</strong> highlighting strengths and areas for
          improvement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. Review and Retake Interviews
        </h2>
        <p className="text-lg">
          You can track all your past interviews, including the questions, your
          answers, and the feedback provided.
        </p>
        <p className="text-lg">
          If you want to improve, you can{" "}
          <strong>retake any of your previous interviews</strong> to sharpen
          your skills.
        </p>
      </section>
    </div>
  );
};

export default HowItWorks;
