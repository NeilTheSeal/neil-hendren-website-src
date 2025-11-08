import "./AdviceColumn.css";
import AdviceImg from "/src/assets/advice.webp";

export default function AdviceColumn() {
  return (
    <div className="post-body">
      <section className="section-1">
        <h1>The Modern-Day Advice Column</h1>
        <div className="text-with-image">
          <img
            id="advice-img"
            src={AdviceImg}
            alt="Advice Column in a Newpaper"
          />
          <p>
            <b>**Note**</b> this application has since been taken down because I
            don't want to pay $20/month for a SendGrid subscription 😂
          </p>
          <p>
            When I was a kid, we had physical paper newspapers delivered to our
            door every day. And in these newspapers, in the entertainment
            section, there was a column called &quot;Ask Jen&quot; or something
            like that, where people would mail in a question to a journalist who
            would publish their professional opinion on how the person should
            handle their issue.
          </p>
          <p>
            I think the modern equivalent is asking your therapist or a trusted
            friend for input, but that&apos;s no fun. What if you could mail
            your question to an expert ... but over the internet? In other
            words, what if you could get your advice via email?
          </p>
          <p>
            This is exactly the kind of silly novelty I set out to create. I
            made a Ruby on Rails app that allows you to email your question to
            <a href="mailto: advice@ai.neilhendren.com">
              &nbsp;advice@ai.neilhendren.com
            </a>
            , and receive a response within about 30 seconds. At its core, this
            app is just a wrapper for ChatGPT 3.5, but that&apos;s not the
            point. The point is to have a fun way of receiving advice about your
            problems.
          </p>
        </div>
      </section>
      <section className="section-2">
        <div className="section-label-top">How I Did It</div>
        <p>
          Like I said before, this is a Ruby on Rails app. However, Ruby on
          Rails is not capable of sending and receiving emails on its own. It
          requires a separate simple mail transfer protocol (SMTP) server to
          have mailing functionality. There are businesses that offer this
          service, such as Sendgrid, Postmark, Mandrill, and Mailgun, and there
          are also open-source SMTP servers that you can run on your own
          machine, such as Exim, Postfix, and Qmail.
        </p>
        <p>
          I decided to set up a free account with Sendgrid, and configured it to
          send a POST request to my Ruby on Rails application when an email is
          sent to advice@ai.neilhendren.com. The POST request contains, among
          other things, the sender&apos;s email address, the email subject, and
          the content of the email. This also required me to configure the DNS
          servers on my website to route the emails sent to
          advice@ai.neilhendren.com to Sendgrid&apos;s IP address.
        </p>
        <p>
          When my Rails application receives the POST request, it sends the
          content of the email to ChatGPT 3.5 using the OpenAI API, along with a
          little bit more information about what the purpose of the prompt is.
          Upon receiving a response, the Rails app formats the response and uses
          <a href="https://guides.rubyonrails.org/action_mailer_basics.html">
            &nbsp;ActionMailer&nbsp;
          </a>
          to provide a response through Sendgrid.
        </p>
        <div className="section-label-bottom">Reflections</div>
      </section>
      <section className="section-3">
        <p>
          The purpose of this was purely to create something fun and novel, and
          maybe someday someone will be struggling with something, and think to
          themselves, &quot;that advice AI might be able to give me some
          guidance!&quot; And to be honest, the AI does provide pretty good
          advice. ChatGPT is far from perfect; it hallucinates URLs that
          don&apos;t actually exist, it provides sources that don&apos;t exist,
          it spits out patently false information with complete confidence in
          its answer, but it does actually give good advice when you&apos;re not
          sure how to proceed in addressing a problem.
        </p>
        <p>
          Large language models such as ChatGPT are becoming an integral part of
          modern-day software design. They are ubiquitous. Is this a good thing
          or a bad thing? Only time will tell. One thing is for sure, though,
          and that is that they are useful for solving simple, low-stakes
          problems and make a great tool for building hobbyist applications.
        </p>
        <p style={{ marginBottom: "80px" }}>
          My source code is available
          <a href="https://github.com/NeilTheSeal/advice-bot" target="_blank">
            &nbsp;on GitHub&nbsp;
          </a>
          if you want a closer look at how this works. Otherwise, perhaps try
          asking it for advice on something you need help with! Here is the
          email address again:
          <a href="mailto: advice@ai.neilhendren.com">
            &nbsp;advice@ai.neilhendren.com
          </a>
          . Thanks for reading!
        </p>
      </section>
    </div>
  );
}
