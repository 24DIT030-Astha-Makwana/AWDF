import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoList from "../components/RepoList";

function Projects() {
  const [repos, setRepos] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/24DIT030-Astha-Makwana/repos",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch canceled");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();

    // Cleanup: cancel fetch if component unmounts
    return () => controller.abort();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="projects-page">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-intro">
          This page shows my recent projects and contributions.
        </p>
        <RepoList repos={repos} />
      </div>
    </div>
  );
}

export default Projects;
