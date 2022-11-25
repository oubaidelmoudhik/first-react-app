function Welcome(props) {
  console.log(props);
  const social = props.url + props.username;
  return (
    <h2>
      Welcome back, <a href={social}>{props.name}</a>
    </h2>
  );
}

export default Welcome;
