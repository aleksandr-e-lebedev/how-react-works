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
