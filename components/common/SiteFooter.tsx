import Image from "next/image"
import React from "react"
import { FaXTwitter, FaInstagram, FaSlack, FaYoutube } from "react-icons/fa6"

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */

const SiteFooter = () => {
  // set up Agility CMS Socials
  const socials = [
    {
      title: "X (Twitter)",
      url: "https://www.twitter.com/agilitycms",
      icon: (
        <FaXTwitter className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/agilitycms",
      icon: (
        <FaInstagram className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Slack",
      url: "https://agilitycms.com/join-slack",
      icon: (
        <FaSlack className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/@AgilityCMS",
      icon: (
        <FaYoutube className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
  ]

  return <br></br>
}

export default SiteFooter
