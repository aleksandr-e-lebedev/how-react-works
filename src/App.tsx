import { useState } from 'react';

import { data } from './data';

interface ItemType {
  summary: string;
  details: string;
}

interface TabContentProps {
  item: ItemType;
}

function TabContent({ item }: TabContentProps) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
  }

  function handleIncrementLikes() {
    setLikes(likes + 1);
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

function DifferentContent() {
  return (
    <div className="different-content">
      <h4 className="different-content__title">
        I&apos;m a DIFFERENT tab, so I reset state 💣💥
      </h4>
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

interface TabbedProps {
  content: ItemType[];
}

function Tabbed({ content }: TabbedProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentItem = content.at(activeTab);
  const tabContentIsActive = activeTab <= 2 && currentItem !== undefined;

  return (
    <div className="tabbed">
      <div className="tabbed__tabs">
        <Tab num={0} activeTab={activeTab} onActivateTab={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onActivateTab={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onActivateTab={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onActivateTab={setActiveTab} />
      </div>

      {tabContentIsActive ? (
        <TabContent key={currentItem.summary} item={currentItem} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Tabbed content={data} />
    </div>
  );
}
