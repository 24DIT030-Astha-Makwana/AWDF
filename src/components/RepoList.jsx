function RepoList({ repos = [] }) {
    return (
        <div className="repo-list-wrapper">
            <h2 className="repo-list-title">GitHub Projects</h2>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li className="repo-item" key={repo.id}>
                        <a className="repo-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p className="repo-description">{repo.description || "No description provided."}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RepoList;