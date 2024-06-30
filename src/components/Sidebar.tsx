function Sidebar() {
  return (
    <>
      <div className="border-r w-1/6 align-center">
        <div>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Services</li>
            <ul>
              <li>Airports</li>
              <li>Videos</li>
            </ul>
          </ul>
        </div>
        <div>
          <ul>
            <li>Others</li>
            <ul>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
