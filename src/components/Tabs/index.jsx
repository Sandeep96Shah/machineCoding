import { useState } from "react";
import './tabs.css';

const items = [
  {
    label: "HTML",
    content: ` The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.`,
  },
  {
    label: "CSS",
    content: ` Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.`,
  },
  {
    label: "JavaScript",
    content: ` JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.`,
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("HTML");
  return (
    <div>
      <div className="tabs-container">
        {items.map(({ label, content }) => (
          <div key={label} onClick={() => setActiveTab(label)}>
            <button>{label}</button>
          </div>
        ))}
      </div>

      {items.map(({ label, content }) => (
        <div key={label}>{label === activeTab ? <p>{content}</p> : null}</div>
      ))}
    </div>
  );
}
