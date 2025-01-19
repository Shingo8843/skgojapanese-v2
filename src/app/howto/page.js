export default function HowToUse() {
    return (
      <section id="main" className="py-8">
        {/* Features Section */}
        <section className="box features">
            <h2 className="major text-3xl md:text-4xl font-bold text-center">
            <span>How to Use This Website</span>
            </h2>
            <div className="w-full">
            <div className="w-full">
                <div className="google-slides-container">
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTZGxWFfJAvxhWG7FXsJF_eFFAQ-9naUmAyng0T_FcYjgcqwWqO0RJFxvd2qc0BnokuctKK0vfrLh_c/embed?start=false&loop=false&delayms=3000&rm=minimal"
                    frameBorder="0"
                    width="100%"
                    height="569"
                    allowFullScreen
                    className="rounded-lg shadow-md"
                ></iframe>
                </div>
            </div>
            <div className="col-2 hidden md:block"></div>
            </div>
        </section>
      </section>
    );
  }
  