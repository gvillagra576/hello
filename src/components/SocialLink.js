const SocialLinks = ({ href, target, icon, linkClass }) => {
  return (
    <li>
      <a href={href} target={target} rel="noreferrer" className={linkClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLinks
