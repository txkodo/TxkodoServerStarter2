export const enUSShareWorld = {
  github: 'GitHub',
  title: 'World Sharing (ShareWorld)',
  desc: '\
    ShareWorld is a feature that allows multiple players to always play the latest world, no matter which player starts the server. {0}\
    Please refer to the {1} for details on how to use this feature.',
  link: 'Official HP',
  descriptRemote: 'Register a data storage location to use the world sharing (ShareWorld)',
  registerNewRemote: 'Register new remote',
  register: 'Register',
  addRemote: {
    title: 'Add remote',
    dialogTitle: 'Registration of new ShareWorld',
    account: 'Account type',
    user: 'User name',
    repository: 'Repository name',
    inputValue: 'Input value'
  },
  githubCard: {
    account: 'Account',
    repository: 'repository',
    updatePAT: 'Update Personal Access Token',
    update: 'UpdateToken',
    inputPAT: 'Input Personal Access Token',
    useRemote: 'Use this remote',
    worldName: 'World name to sync with',
    unregister: {
      remote: 'Unregister remote',
      dialog: 'Unregister {name}',
      decide: 'Unregister',
      desc: '\
        Unregister "{owner}/{repo}" from ServerStarter2<br>\
        The repository on GitHub will not be deleted, but the world cannot be re-shared using "{owner}/{repo}".\
        ',
    },
  },
  existRemote: {
    syncWorldTitle: 'ShareWorld data in sync',
    syncWorldDesc: '\
    This world is synchronized with {0}.\
    On {2}, this synchronization data can be viewed in the browser.',
    unregister: {
      unregistSyncTitle: 'Remove synchronization of world',
      unregistSyncDesc: '\
        Synchronization with {remotePath} will be removed.<br>\
        ShareWorld will not be deleted, but the updated data in {worldName} will no longer be shared.',
      dialogTitle: 'Remove synchronization',
      dialogDesc: '\
        If you remove synchronization, any content played on this server after this will not be synchronized.<br>\
        Do you want to remove sharing?',
    },
    delete: {
      title: 'Delete ShareWorld',
      desc: '\
      Completely delete the shared data in {remotePath}.<br>\
      The shared ShareWorld data will be deleted, but all participants can continue to activate this world as a local world.',
      btn: 'Delete ShareWorld',
      dialogTitle: 'Delete remotedata',
      dialogDesc: '\
      The ShareWorld data for this world will be deleted, and the shared partner will be removed from synchronization as well.<br>\
      Do you want to delete ShareWorld data for this world?',
    }
  }
}