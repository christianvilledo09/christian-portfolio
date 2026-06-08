const tools = ["R", "TF-IDF", "LASSO", "Random Forest", "LDA", "SVD"];

const pipelineSteps = [
  "Removed anonymized usernames, URLs, and non-letter characters",
  "Converted all text to lowercase and removed extra whitespace",
  "Tokenized tweets into individual words",
  "Removed stopwords and very short words",
  "Computed TF-IDF scores from the training set",
  "Selected the top 2,000 terms based on document frequency",
  "Merged TF-IDF features with handcrafted and structural indicators",
  "Aligned validation and test matrices to the training feature space",
];

const results = [
  {
    model: "Random Forest",
    f1: "0.843",
    auc: "0.915",
    note: "Highest F1-score",
  },
  {
    model: "LASSO Logistic Regression",
    f1: "0.839",
    auc: "0.918",
    note: "Highest AUC",
  },
  {
    model: "LDA",
    f1: "0.805",
    auc: "0.871",
    note: "Baseline comparison",
  },
];

export default function HateSpeechPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="mb-12 inline-block text-zinc-500 hover:text-white">
          ← Back to Portfolio
        </a>

        <section className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Machine Learning • NLP • Text Classification
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Hate Speech Detection in Filipino Political Tweets
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            I built a machine learning pipeline to classify Filipino political
            tweets as hate speech or non-hate speech. The project focused on
            transforming raw Taglish tweet text into a usable feature matrix,
            comparing multiple classifiers, and interpreting which features
            contributed most to detection.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-semibold">Why I Built This</h2>

          <p className="max-w-4xl leading-8 text-zinc-300">
            Political discussions on social media often contain harassment,
            insults, and targeted attacks. Detecting hate speech at scale is
            difficult, especially in Filipino online spaces where English and
            Filipino are frequently mixed within the same message. I wanted to
            explore how far traditional machine learning methods could go in
            detecting hate speech in this local political context.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">Dataset</h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-3xl font-bold">27,383</h3>
              <p className="mt-2 text-zinc-400">Filipino political tweets</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-3xl font-bold">2</h3>
              <p className="mt-2 text-zinc-400">Classification labels</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-3xl font-bold">2016</h3>
              <p className="mt-2 text-zinc-400">Election-related tweets</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-3xl font-bold">2022</h3>
              <p className="mt-2 text-zinc-400">Election-related tweets</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">
            How I Built the Feature Matrix
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              The most interesting part of this project for me was not just
              running the models, but building the feature matrix from raw tweet
              text. I first cleaned and standardized the tweets by removing
              anonymized usernames, URLs, unnecessary characters, and excess
              whitespace. I also converted the text to lowercase so that the same
              word would not be treated differently just because of capitalization.
            </p>

            <p>
              After cleaning, I used TF-IDF to convert the tweets into numerical
              features. Instead of using every possible word, I retained the most
              frequently occurring terms based on document frequency. This helped
              keep the matrix manageable while still preserving the most useful
              text signals.
            </p>

            <p>
              I also added handcrafted features that reflected the local context
              of Filipino political hate speech, such as profanity indicators,
              slur indicators, and red-tagging indicators. I combined these with
              structural features like word count, character count,
              capitalization ratio, and code-switching ratio. The final matrix
              contained 2,049 predictors per tweet.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {pipelineSteps.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">Models I Tested</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                LASSO Logistic Regression
              </h3>
              <p className="leading-7 text-zinc-400">
                I initially considered logistic regression as a baseline model
                for the binary response. However, after seeing signs of perfect
                prediction and possible overfitting, I used LASSO regularization
                to shrink less useful coefficients and retain more relevant
                features.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-4 text-xl font-semibold">Random Forest</h3>
              <p className="leading-7 text-zinc-400">
                I tested Random Forest because it is an ensemble method that can
                handle high-dimensional data and capture non-linear
                relationships. It also helped me examine which terms and
                indicators were most important for classification.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Linear Discriminant Analysis
              </h3>
              <p className="leading-7 text-zinc-400">
                I included LDA to see how a generative classifier would perform
                despite the assumption violations expected in sparse text data.
                To partly mitigate this, I applied SVD first to reduce the
                TF-IDF matrix into a lower-dimensional representation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">What I Found</h2>

          <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Main Result
            </p>

            <h3 className="text-3xl font-bold">Random Forest and LASSO were close.</h3>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
              Random Forest achieved the highest F1-score, while LASSO Logistic
              Regression achieved the highest AUC. This showed that both models
              performed strongly, but they emphasized slightly different aspects
              of classification performance.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-800">
            <table className="w-full">
              <thead className="border-b border-zinc-800">
                <tr>
                  <th className="p-4 text-left">Model</th>
                  <th className="p-4 text-left">F1 Score</th>
                  <th className="p-4 text-left">AUC</th>
                  <th className="p-4 text-left">Note</th>
                </tr>
              </thead>

              <tbody>
                {results.map((result) => (
                  <tr key={result.model} className="border-b border-zinc-800 last:border-b-0">
                    <td className="p-4">{result.model}</td>
                    <td className="p-4">{result.f1}</td>
                    <td className="p-4">{result.auc}</td>
                    <td className="p-4 text-zinc-400">{result.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-semibold">What I Learned</h2>

          <ul className="space-y-4 text-lg leading-8 text-zinc-300">
            <li>
              • Building the feature matrix carefully can matter as much as the
              choice of classifier.
            </li>

            <li>
              • Regularization was useful when ordinary logistic regression
              showed signs of overfitting or separation.
            </li>

            <li>
              • LDA can still be informative as a comparison model, but sparse
              TF-IDF data makes its assumptions difficult to satisfy.
            </li>

            <li>
              • Domain-specific features, such as profanity and red-tagging
              indicators, made the model outputs easier to interpret.
            </li>

            <li>
              • In this dataset, political hate speech often appeared through
              targeted attacks against public figures rather than only through
              general hostile language.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}