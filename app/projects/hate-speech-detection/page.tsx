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
    accuracy: "0.8381",
    sensitivity: "0.8721",
    specificity: "0.8040",
    f1: "0.8433",
    auc: "0.9149",
  },
  {
    model: "LASSO Logistic Regression",
    accuracy: "0.8370",
    sensitivity: "0.8477",
    specificity: "0.8263",
    f1: "0.8387",
    auc: "0.9175",
  },
  {
    model: "LDA",
    accuracy: "0.7953",
    sensitivity: "0.8455",
    specificity: "0.7452",
    f1: "0.8051",
    auc: "0.8712",
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
              word would not be treated differently just because of
              capitalization.
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

          <div className="mt-10">
            <img
              src="/tfidf-feature-matrix.png"
              alt="TF-IDF feature matrix with handcrafted features"
              className="w-full rounded-2xl border border-zinc-800"
            />

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Preview of the final feature matrix. Each tweet was represented by
              TF-IDF word features together with handcrafted indicators such as
              red-tagging, profanity, slur flags, capitalization ratio, word
              count, character count, and code-switching measures.
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

            <h3 className="text-3xl font-bold">
              Random Forest and LASSO were close, but they had different
              strengths.
            </h3>

            <p className="mt-4 max-w-4xl leading-8 text-zinc-400">
              LASSO Logistic Regression achieved the highest AUC and
              specificity, but Random Forest achieved the highest F1-score and
              sensitivity. Since this task involves detecting harmful content, I
              considered sensitivity important because false negatives mean
              actual hate speech remains undetected. This made Random Forest the
              more practical model to highlight.
            </p>
          </div>

          <div className="mb-10">
            <img
              src="/model-comparison.png"
              alt="Model performance comparison"
              className="w-full rounded-2xl border border-zinc-800"
            />

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Comparison of classification performance across Random Forest,
              LASSO Logistic Regression, and Linear Discriminant Analysis.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">
            Which Features Were Most Important?
          </h2>

          <p className="max-w-4xl text-lg leading-8 text-zinc-300">
            Random Forest allowed me to inspect which variables contributed most
            to classification. Political names, accusation-related terms, and
            contextual indicators appeared among the strongest predictors. This
            reinforced the observation that hate speech in this dataset was
            often directed toward specific public figures through accusations,
            insults, and politically charged language.
          </p>

          <div className="mt-8">
            <img
              src="/random-forest-feature-importance.png"
              alt="Random Forest feature importance"
              className="w-full max-w-2xl rounded-3xl border border-zinc-800"
            />

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Top features identified by the Random Forest model based on
              impurity-based feature importance scores.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">
            Word Usage in Hate and Non-Hate Tweets
          </h2>

          <p className="max-w-4xl text-lg leading-8 text-zinc-300">
            To better understand the model outputs, I compared how often
            selected words appeared in hate speech and non-hate speech tweets.
            Some terms were disproportionately associated with hate speech,
            particularly accusation terms and political attacks. Others appeared
            much more frequently in non-hate tweets, reflecting campaign
            messaging and ordinary political discussion.
          </p>

          <div className="mt-8">
            <img
              src="/word-presence-rates.png"
              alt="Word presence rates by class"
              className="w-full max-w-2xl rounded-3xl border border-zinc-800"
            />

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Presence rates of politically salient terms across hate speech and
              non-hate speech tweets.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">
            Frequent Phrases in Hate and Non-Hate Tweets
          </h2>

          <p className="max-w-4xl text-lg leading-8 text-zinc-300">
            Looking at bigrams revealed meaningful differences between the two
            classes. Hate speech tweets were often characterized by
            accusation-driven phrases and direct attacks, while non-hate tweets
            tended to contain campaign-related language, endorsements, and
            general political discussion.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <img
                src="/hate-bigrams.png"
                alt="Top hate speech bigrams"
                className="h-[700px] w-full object-contain rounded-3xl border border-zinc-800 bg-white"
              />

              <p className="mt-4 text-center text-sm text-zinc-500">
                Most frequent bigrams among hate speech tweets.
              </p>
            </div>

            <div>
              <img
                src="/nonhate-bigrams.png"
                alt="Top non-hate speech bigrams"
               className="h-[700px] w-full object-contain rounded-3xl border border-zinc-800 bg-white"
              />

              <p className="mt-4 text-center text-sm text-zinc-500">
                Most frequent bigrams among non-hate speech tweets.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">
            Handcrafted and Structural Features
          </h2>

          <p className="max-w-4xl text-lg leading-8 text-zinc-300">
            Beyond TF-IDF terms, I engineered several domain-specific
            indicators. Profanity, red-tagging references, and slur-related
            language occurred more frequently in hate speech tweets. Structural
            characteristics such as tweet length, capitalization, and
            code-switching behavior were also included to capture writing
            patterns beyond vocabulary alone.
          </p>

          <div className="mt-8">
            <img
              src="/handcrafted-feature-rates.png"
              alt="Handcrafted and structural feature rates"
              className="w-full max-w-3xl rounded-3xl border border-zinc-800"
            />

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Comparison of handcrafted and structural features across hate and
              non-hate speech tweets.
            </p>
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
              • Sensitivity matters in hate speech detection because missing
              actual hate speech can leave harmful content undetected.
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