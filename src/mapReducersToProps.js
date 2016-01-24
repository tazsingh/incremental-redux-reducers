export default function mapReducersToProps(mapping) {
  return (state) => {
    let stateToPropsMapping = {};

    for(let key in mapping) {
      stateToPropsMapping[key] = state[mapping[key].reduxName];
    }

    return stateToPropsMapping;
  }
}
