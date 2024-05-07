function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" ,marginTop:"-14%",marginRight:"4%",borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }
  export default NextArrow;