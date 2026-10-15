export function Brand({ tagline = false }: { tagline?: boolean }) {
  return (
    <>
      <img className="brand-logo" src="/brand/wakaba-logo.png" width={44} height={44} alt="" />
      <span className="brand-name">
        wakaba{tagline && <small>HỌC TỪNG CHÚT, LỚN MỖI NGÀY</small>}
      </span>
    </>
  );
}
