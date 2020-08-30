/* eslint-disable react/no-multi-comp */

import PropTypes from 'prop-types'
import { createMedia } from '@artsy/fresnel'
import React, { Component } from 'react'
import {
  Button,
  Menu,
  Segment,
  Container,
  Icon,
  Sidebar,
  Label,
} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class DesktopContainer extends Component {

  render() {
    const { children, location } = this.props

    return (
      <Media greaterThan='mobile'>
          <Segment
            textAlign='center'
            vertical
          >
            <Menu
              color='violet'
              secondary
              size='large'
            >
              <Container>
                <Menu.Item
                  as='a'
                  href='/'
                  header
                  active={location.pathname === '/'}
                >
                  taxa
                  <Label horizontal color='violet'>Beta</Label>
                </Menu.Item>
                <Menu.Item as='a' href='/guides/' active={location.pathname === '/guides/'}>Guides</Menu.Item>
                <Menu.Item as='a' target='_blank' rel='noopener noreferrer'>Our vision</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' color='violet' style={{ marginLeft: '0.5em' }}>
                    Launch PoC App 
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, location } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item
              as='a'
              href='/'
              header
              active={location.pathname === '/'}
            >
              taxa
              <Label horizontal color='violet'>Beta</Label>
            </Menu.Item>
            <Menu.Item as='a' href='/guides/' active={location.pathname === '/guides/'}>Guides</Menu.Item>
            <Menu.Item as='a' target='_blank' rel='noopener noreferrer'>Our vision</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              textAlign='center'
              vertical
            >
              <Container>
                <Menu inverted secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' color='black' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' color='violet' style={{ marginLeft: '0.5em' }}>
                      Launch PoC App
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children, location }) => (
  <MediaContextProvider>
    <DesktopContainer location={location}>{children}</DesktopContainer>
    <MobileContainer location={location}>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export const wrappedResponsiveContainer = withRouter(ResponsiveContainer)

