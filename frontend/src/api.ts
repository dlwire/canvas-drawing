function fetchContent(): Promise<string> {
    return fetch(
        `http://localhost:5000/`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/vnd.github.cloak-preview"
          })
        }
    )
    .then(res => res.json())
    .then(({ content }) => content)
    .catch(error => console.log(error));
}

export { fetchContent }