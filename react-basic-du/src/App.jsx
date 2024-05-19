import "./App.scss";
import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

function App() {
	return (
		<>
			<VideoList title="Videos">
				<section>
					<VideoItem message="REACT" />
					<VideoItem message="ANGULAR" />
					<VideoItem message="VUEJS" />
				</section>
			</VideoList>
		</>
	);
}

export default App;
