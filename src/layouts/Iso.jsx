import "../styles/iso.css";

function Iso() {
  return (
    <div className="iso">
      <div className="scroller">
        <p>ISO 9001:2015 Certified Quality Management System</p>
        <span>|</span>
        <p>ISO 14001:2015 Certified Environmental Management System</p>
        <span> | </span>
        {/* Clone */}
        <p>ISO 9001:2015 Certified Quality Management System</p>
        <span>|</span>
        <p>ISO 14001:2015 Certified Environmental Management System</p>
        <span> | </span>
      </div>

      {/* the below codes are duplicate of above codes */}
      <div className="scroller">
        <p>ISO 9001:2015 Certified Quality Management System</p>
        <span>|</span>
        <p>ISO 14001:2015 Certified Environmental Management System</p>
        <span> | </span>
        {/* Clone */}
        <p>ISO 9001:2015 Certified Quality Management System</p>
        <span>|</span>
        <p>ISO 14001:2015 Certified Environmental Management System</p>
        <span> | </span>
      </div>
    </div>
  );
}

export default Iso;
