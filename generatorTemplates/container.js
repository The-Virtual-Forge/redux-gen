import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import <%= nameUpper %> from '../components/<%= nameUpper %>/<%= nameUpper %>';
import * as <%= nameUpper %>Actions from '../actions/<%= nameLower %>';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(<%= nameUpper %>Actions, dispatch);
}

export default connect(null, mapDispatchToProps)(<%= nameUpper %>);
