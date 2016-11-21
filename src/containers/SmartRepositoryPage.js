import {connect} from 'react-redux'
import RepositoryPage from '../components/RepositoryPage'
import {setNavBarTitle} from '../actionCreators/UIActions'
import {requestAuthor} from '../actionCreators/ownerActions'

const mapStateToProps = (state) => ({
  ...state.repos,
  title: state.ui.repoURL
})

export default connect(
  mapStateToProps, {
    setNavBarTitle,
    requestAuthor
  }
)(RepositoryPage)
