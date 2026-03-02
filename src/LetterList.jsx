import LetterItem from "./Letteritem";

function LetterList({ letters }) {
    return (
        <div style={{ marginTop: "20px" }}>
            {letters && letters.length === 0 && <p>Chưa có letter nào</p>}
            {letters && letters.map((letter) => (
                <LetterItem key={letter.id} letter={letter} />
            ))}
        </div>
    );
}

export default LetterList;