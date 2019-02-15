import React from 'react'
import PropTypes from 'prop-types'
import { BrunoPageTemplate } from '../../templates/Bruno'

const BrunoPagePreview = ({ entry, widgetFor }) => (
  <BrunoPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BrunoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BrunoPagePreview
