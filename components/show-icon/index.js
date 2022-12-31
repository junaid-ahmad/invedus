export const ShowIcon = ({ IconType, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "var(--light)",
        width: "45%",
        display: "flex",
        justifyContent: "center",
        padding: "0.2rem",
        cursor: "pointer",
        borderRadius: 4,
      }}
    >
      <IconType color="var(--dark)" size={20} />
    </div>
  );
};
