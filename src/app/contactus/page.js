export default function ContactUs() {
    return (
      <div className="container mx-auto px-4">
        <div className="row gap-8">
          <div className="col-12">
            {/* Features Section */}
            <section className="box features">
              <h2 className="major text-3xl md:text-4xl font-bold mt-24 text-center">
                <span>Contact Us</span>
              </h2>
              <div className="row mt-12">
                <div className="col-2 hidden md:block"></div>
                <div className="col-8 w-full md:w-8/12 mx-auto">
                  <div className="flex justify-center">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScCFKtR5oMXH9ffXxQ5X5IMOtgOUhn2GdmjiCxQPXZSD0UfHg/viewform?embedded=true"
                      width="100%"
                      height="630"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      className="rounded-lg shadow-md"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
                <div className="col-2 hidden md:block"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  