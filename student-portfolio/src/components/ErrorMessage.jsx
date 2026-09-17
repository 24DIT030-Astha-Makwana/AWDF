// function ErrorMessage({message,onRetry}){
//     return(
//         <div className="error-box">
//             <p style={{ color: 'red' }}>Something went wrong: {message}</p>
//             {onRetry && <button onClick={onRetry}>Retry</button>}
//         </div>
//     )

// }
// export default ErrorMessage;
function ErrorMessage({ message = "404 - Page Not Found", onRetry }) {
  return (
    <div className="error-box">
      <h1>404</h1>
      <p>{message}</p>

      {onRetry && (
        <button onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorMessage