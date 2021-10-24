const linksSocialMedia = {
  github: 'Johhnnyz',
  youtube: 'JohhnnyPlays',
  instagram: 'jon__ribeiro',
  facebook: 'jonathan.ribeiro.376',
  twitter: 'progrbr'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
