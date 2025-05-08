export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #fef9c3, #dbeafe)",
      padding: "2rem",
      fontFamily: "sans-serif",
      color: "#1f2937"
    }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#dc2626", textAlign: "center" }}>
          Challenge de Mai – Boostez votre performance !
        </h1>
        <div style={{ backgroundColor: "#fef08a", padding: "1rem", marginTop: "1rem", borderRadius: "0.5rem" }}>
          🎯 Chaque semaine : <strong style={{ color: "#2563eb" }}>100€</strong> pour les objectifs atteints.<br />
          ⚡ Bonus de <strong style={{ color: "#2563eb" }}>100€</strong> si l’objectif mensuel est atteint avant le <u>24 mai</u>.<br />
          📊 Jusqu’à <strong style={{ color: "#16a34a" }}>500€</strong> à gagner.
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Conditions de participation</h2>
          <ul style={{ marginLeft: "1rem", listStyle: "disc" }}>
            <li>Faire partie des effectifs au moment de la remise des gains</li>
            <li>Ne pas être en procédure ou démissionnaire</li>
            <li>L’ACC doit être validé sous 14 jours et actif le 30 juin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
