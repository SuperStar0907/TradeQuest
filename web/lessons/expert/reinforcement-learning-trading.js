LESSON_REGISTRY["reinforcement-learning-trading"] = {
  id: "reinforcement-learning-trading",
  title: "Reinforcement Learning for Trading",
  track: "expert",
  category: "expert-research",
  difficulty: "expert",
  order: 59,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["ml-feature-engineering"],
  sections: [
    {
      type: "text",
      content: "<h3>Why Reinforcement Learning Fits Trading Better Than Supervised Learning</h3><p>Supervised learning requires labeled training examples: input features mapped to correct output labels. In trading, the correct action at each point in time is unknowable without simulating the future. Reinforcement learning (RL) sidesteps this requirement by learning a policy through trial and error in a simulated environment, optimizing cumulative long-run reward rather than point-in-time prediction accuracy.</p><p>RL is particularly well-suited to portfolio management because it naturally handles sequential decisions, non-stationary environments, and the feedback loop between actions and future states. A trade executed today changes the portfolio state and thus the optimal action space tomorrow — RL captures this dependency explicitly, whereas a supervised approach treating each day independently does not.</p>"
    },
    {
      type: "key-concept",
      title: "The Markov Decision Process Formulation for Portfolios",
      content: "A portfolio management problem is formally a Markov Decision Process (MDP) defined by the tuple (S, A, P, R, gamma). The state space S includes current holdings, available capital, market features (returns, volatility, correlation estimates), and optionally macro indicators. The action space A is the set of portfolio weight vectors summing to 1 (or including a cash position). The transition function P describes how the market evolves — in practice this is unknown and learned from simulation. The reward function R is typically the log return of the portfolio minus a transaction cost penalty. The discount factor gamma (typically 0.99 for daily trading) controls the trade-off between immediate and future rewards. The agent learns a policy pi(a|s) that maximizes the expected discounted cumulative reward: E[sum of gamma^t * R_t]."
    },
    {
      type: "text",
      content: "<h3>Q-Learning and Deep Q-Networks in Practice</h3><p>Classical Q-learning learns a value function Q(s, a) representing the expected future reward of taking action a in state s. The Bellman equation drives the update: Q(s,a) = R + gamma * max_a' Q(s', a'). Deep Q-Networks (DQN) replace the Q-table with a neural network, enabling generalization to continuous state spaces.</p><p>Key DQN enhancements critical for financial applications:</p><ul><li><strong>Experience replay</strong> — Stores past transitions and samples mini-batches randomly to break temporal correlation between training examples. This is especially important in finance because adjacent days are highly correlated.</li><li><strong>Target network</strong> — A periodically frozen copy of the Q-network used for computing targets, preventing the oscillation that occurs when both the prediction and the target are updated simultaneously.</li><li><strong>Dueling architecture</strong> — Separates the state value V(s) from the advantage A(s,a), helping the agent learn which states are inherently valuable regardless of action choice — useful for periods when all actions are roughly equivalent.</li></ul><p>Limitation: DQN requires a discrete action space. For continuous portfolio weights, policy gradient methods are required.</p>"
    },
    {
      type: "text",
      content: "<h3>Policy Gradient Methods: PPO and SAC</h3><p>Policy gradient methods directly optimize the policy pi_theta(a|s) parameterized by theta. Proximal Policy Optimization (PPO) constrains the policy update size using a clipped objective function, preventing catastrophically large updates that cause instability — a critical property in financial environments with fat-tailed returns. Soft Actor-Critic (SAC) adds an entropy regularization term, encouraging the policy to remain stochastic rather than collapsing to a deterministic strategy, which improves exploration and robustness to regime changes.</p><p>In live trading deployments, SAC is frequently preferred over PPO because its entropy maximization naturally prevents over-commitment to a single strategy — a form of implicit diversification in action space. The learned policy distributes probability across multiple actions, making it less vulnerable to adversarial market conditions that would exploit a purely deterministic strategy.</p>"
    },
    {
      type: "key-concept",
      title: "Reward Shaping and Simulation Fidelity",
      content: "The reward function is the most consequential design decision in a trading RL system. Naive choices like raw PnL lead to policies that take extreme risks for marginal gains. Robust reward functions incorporate: (1) Sharpe ratio or Sortino ratio instead of raw return to penalize volatility, (2) transaction cost terms proportional to turnover to prevent excessive trading, (3) drawdown penalties triggered when portfolio value drops below a high-water mark, and (4) position limit violations encoded as large negative penalties. Simulation fidelity matters equally — the environment must model bid-ask spreads, market impact (especially for large positions), partial fills, and overnight gaps. An RL agent trained in an unrealistically clean environment will fail in live markets due to sim-to-real transfer gap."
    },
    {
      type: "comparison-table",
      headers: ["Algorithm", "Action Space", "Sample Efficiency", "Stability", "Best Use Case"],
      rows: [
        ["DQN", "Discrete only", "Moderate", "Moderate (requires target network)", "Discrete position sizing (long/flat/short)"],
        ["PPO", "Continuous or discrete", "Moderate", "High (clipped objective)", "Portfolio weight allocation with frequent rebalancing"],
        ["SAC", "Continuous", "High", "High (entropy regularization)", "Multi-asset allocation where exploration is critical"],
        ["A3C / A2C", "Continuous or discrete", "Low", "Low (noisy gradients)", "Research baselines; rarely deployed in production"],
        ["Recurrent PPO (LSTM)", "Continuous", "Low", "Moderate", "Partial observability (e.g., using order book snapshots as state)"]
      ]
    }
  ]
};
