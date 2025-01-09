function handleClick(param) {
  return param === "top"
    ? (location.href = "#bottom")
    : (location.href = "#top");
}
