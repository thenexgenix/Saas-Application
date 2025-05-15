function FrequentQuestion() {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl lg:text-[56px] text-center font-bold">
        Frequently Answer & Question
      </h1>

      <div className="mt-6 md:mt-8 lg:mt-12">
        <div className="collapse collapse-plus bg-[var(--primary-light)]/20 mt-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[var(--primary-light)]/20 mt-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-[var(--primary-light)]/20 mt-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrequentQuestion;
