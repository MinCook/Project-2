function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display: "block",marginTop:"-14%",marginLeft:"95%",borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }
  export default PrevArrow;