interface ItemType {
  summary: string;
  details: string;
}

interface TabContentProps {
  item: ItemType;
}

function TabContent({ item }: TabContentProps) {
  const showDetails = true;
  const likes = 0;

  function handleToggleDetails() {
    return;
  }

  function handleIncrementLikes() {
    return;
  }

  function handleTrippleIncrementLikes() {
    return;
  }

  function handleUndo() {
    return;
  }

  function handleUndoLater() {
    return;
  }

  return (
    <div className="tab-content">
      <h4 className="tab-content__title">{item.summary}</h4>
      {showDetails && <p className="tab-content__details">{item.details}</p>}

      <div className="tab-content__actions">
        <button
          type="button"
          className="tab-content__action"
          onClick={handleToggleDetails}
        >
          {showDetails ? 'Hide' : 'Show'} details
        </button>

        <div className="tab-content__hearts-counter">
          <span className="tab-content__hearts-count">{likes} ❤️</span>
          <button
            type="button"
            className="tab-content__hearts-action"
            onClick={handleIncrementLikes}
          >
            +
          </button>
          <button
            type="button"
            className="tab-content__hearts-action"
            onClick={handleTrippleIncrementLikes}
          >
            +++
          </button>
        </div>
      </div>

      <div className="tab-content__undo">
        <button
          type="button"
          className="tab-content__undo-button"
          onClick={handleUndo}
        >
          Undo
        </button>
        <button
          type="button"
          className="tab-content__undo-button"
          onClick={handleUndoLater}
        >
          Undo in 2s
        </button>
      </div>
    </div>
  );
}

interface TabProps {
  num: number;
  activeTab: number;
  onActivateTab: (num: number) => void;
}

function Tab({ num, activeTab, onActivateTab }: TabProps) {
  return (
    <button
      type="button"
      className={activeTab === num ? 'tab tab_active' : 'tab'}
      onClick={() => {
        onActivateTab(num);
      }}
    >
      Tab {num + 1}
    </button>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>How React Works</h1>
    </div>
  );
}
