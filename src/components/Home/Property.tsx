interface PropertyProps {
  clickState: boolean;
}

const Property: React.FC<PropertyProps> = ({ clickState }) => {
  return (
    <div>
      <h2>Property Item</h2>
      <p>This is a single property component. Click state: {clickState ? 'True' : 'False'}</p>
    </div>
  );
};

export default Property;
