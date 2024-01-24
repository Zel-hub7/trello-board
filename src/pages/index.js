import Board from "@components/Board";
import Header from "@components/Header";


export default function Home() {

  return (
    <div className="h-screen">
      <Header />
      <div className="flex board-height">
       
        <Board />
      </div>
    </div>
  );
}
