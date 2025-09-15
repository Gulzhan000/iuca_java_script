function maskCard(card, maskChar = "X") {
  const s = String(card).replace(/\s+/g, ""); 
  if (s.length <= 10) return s;
  return (
    s.slice(0, 6) +
    maskChar[0].repeat(s.length - 10) +
    s.slice(-4)
  );
}
