const LinksSocialMedia = {
  instagram: 'anelizemenesess',
  linkedin: 'in/anelizemeneses/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++
// ser humano lê 12345678910, já o computador lê 0987654321

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.com/users/${LinksSocialMedia.github}`
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userLink.href = data.html_url
    userLink.src = data.avatar_url
    userLink.textContent = data.login
  })

getGitHubProfileInfos()
