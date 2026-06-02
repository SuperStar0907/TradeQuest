LESSON_REGISTRY["ml-feature-engineering"] = {
  id: "ml-feature-engineering",
  title: "ML Feature Engineering for Finance",
  track: "expert",
  category: "expert-research",
  difficulty: "expert",
  order: 58,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: [],
  sections: [
    {
      type: "text",
      content: "<h3>Why Feature Engineering Dominates Model Performance</h3><p>In financial machine learning, the quality of features — not the sophistication of the model — is the primary determinant of predictive performance. Raw price and volume data is non-stationary, autocorrelated, and contaminated with noise. A gradient-boosted tree trained on carefully engineered features will almost always outperform a deep neural network trained on raw OHLCV bars.</p><p>The practitioner's workflow is: (1) define the prediction target, (2) engineer features that are stationary and informative, (3) apply walk-forward validation to prevent look-ahead bias, (4) select features using importance metrics, and (5) continuously audit for regime shifts that degrade feature quality.</p><ul><li><strong>Stationary features</strong> — Have stable statistical properties over time (critical for generalization)</li><li><strong>Informative features</strong> — Have measurable predictive power for the target variable</li><li><strong>Non-redundant features</strong> — Are not perfectly correlated with each other (reduces overfitting)</li></ul>"
    },
    {
      type: "key-concept",
      title: "Stationarity and the Fractional Differencing Solution",
      content: "Raw prices are I(1) processes — their first difference is stationary, but differencing destroys memory. Marcos Lopez de Prado's fractional differencing allows you to find the minimum differencing order d such that the series passes an ADF test while retaining the maximum amount of historical memory. For most equity price series, d falls between 0.3 and 0.5. This preserves long-range autocorrelation structure that full differencing discards, giving the model access to trend information that would otherwise be lost. The FRACDIFF operator is defined as (1 - L)^d applied to the price series, where L is the lag operator."
    },
    {
      type: "text",
      content: "<h3>Category Taxonomy of Financial Features</h3><p>Financial features fall into five broad categories, each capturing a different information source:</p><ul><li><strong>Price-based</strong> — Returns at multiple horizons (1d, 5d, 21d), realized volatility ratios, distance from moving averages, Bollinger Band z-scores, gap statistics</li><li><strong>Volume-based</strong> — Dollar volume, volume-weighted average price deviation, Kyle's lambda (price impact per unit volume), Amihud illiquidity ratio</li><li><strong>Cross-sectional</strong> — Rank of return within sector, percentile of volatility in universe, relative strength versus benchmark</li><li><strong>Microstructure</strong> — Bid-ask spread, order imbalance, trade sign autocorrelation, roll's implicit spread estimator</li><li><strong>Fundamental</strong> — Earnings surprise, revision momentum, short interest change, insider transaction signals</li></ul><p>Cross-sectional normalization (ranking within the investment universe at each point in time) is one of the most reliable transformations because it removes market-wide effects and produces values bounded between 0 and 1 regardless of the underlying distribution.</p>"
    },
    {
      type: "text",
      content: "<h3>Walk-Forward Validation and Purging</h3><p>Standard k-fold cross-validation is inadmissible for time-series data because it creates look-ahead bias and information leakage. Walk-forward validation uses an expanding or rolling training window with a forward test window that never overlaps with training data.</p><p>Two additional sources of leakage require explicit handling:</p><ul><li><strong>Purging</strong> — Labels derived from overlapping return windows create temporal correlation between adjacent observations. You must purge from the training set any observations whose label calculation window overlaps with observations in the test set.</li><li><strong>Embargo</strong> — Even after purging, microstructure information can leak across the purge boundary via correlated noise. An embargo period (typically 5-10 trading days) should be excluded from training after each test fold boundary.</li></ul><p>The combinatorial purged cross-validation (CPCV) method from Lopez de Prado generates a larger number of test paths by using combinations of folds rather than sequential splits, producing a more robust estimate of backtest performance.</p>"
    },
    {
      type: "key-concept",
      title: "Feature Selection: MDI, MDA, and SFI",
      content: "Three importance measures are standard in financial ML. Mean Decrease Impurity (MDI) measures how much each feature reduces impurity at tree splits — it is fast but biased toward high-cardinality and continuous features. Mean Decrease Accuracy (MDA) measures the drop in out-of-bag accuracy when a feature's values are permuted — it is slower but more reliable and handles correlated features better. Single Feature Importance (SFI) trains separate models for each feature and ranks by cross-validated score — it eliminates substitution effects entirely but is computationally expensive. In practice, use MDI for rapid screening, MDA for final selection, and SFI to validate that top features retain signal in isolation."
    },
    {
      type: "comparison-table",
      headers: ["Technique", "Preserves Memory", "Achieves Stationarity", "Computational Cost", "Typical Use Case"],
      rows: [
        ["Raw Price", "Yes", "No", "None", "Only suitable as input to tree models that learn their own differencing implicitly"],
        ["First Difference (Returns)", "Partial", "Yes", "Trivial", "Standard baseline; loses trend information"],
        ["Fractional Differencing (d=0.35)", "Yes", "Yes", "Moderate", "Recommended for models sensitive to long-range dependence"],
        ["Log Price", "Yes", "No", "Trivial", "Useful for volatility scaling but not stationary alone"],
        ["Cross-Sectional Rank", "No", "Yes (by construction)", "Low", "Removes market beta; standard in factor models"]
      ]
    }
  ]
};
