import { Blogs } from './components/blog';
import { Header } from './components/Header';
import { SideProjects } from './components/SideProjects';
import { Skills } from './components/Skills';
import { TechStackAndTools } from './components/TechStackAndTools';
import { WorkHistory } from './components/WorkHistory';

function App() {
    return (
        <div id='container--main'>
            <Header />
            <Skills />
            <TechStackAndTools />
            <WorkHistory />
            <SideProjects />
            <Blogs />
        </div>
    );
}

export default App;
