"use client"

import Image from "next/image"
import React, { useState } from "react"
import {
  FaInfoCircle,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaSpinner,
  FaSyncAlt,
} from "react-icons/fa"

interface Props {
  isPreview: boolean | undefined
  isDevelopmentMode: boolean | undefined
}

/**
 * This is a preview bar that is enabled by default to handle viewing content in preview & live mode, remove this for production use.
 **/
const PreviewBar = ({ isPreview, isDevelopmentMode }: Props) => {
  const [open, setOpen] = useState(false)
  const [isPreviewRequested, setisPreviewRequested] = useState(false)

  // handle view function to determine preview / live mode
  const handleView = () => {
    if (isDevelopmentMode) {
      alert("You are currently in Development Mode, Live Mode is unavailable.")
    } else {
      if (!isDevelopmentMode && !isPreview) {
        setisPreviewRequested(true)
        fetch("/api/preview/generate-key")
          .then((response) => response.text())
          .then((previewKey) => {
            window.location.replace(
              `${
                window.location.pathname
              }?agilitypreviewkey=${encodeURIComponent(previewKey)}`
            )
          })
          .catch((error) => {
            console.error("Error generating preview key", error)
            setisPreviewRequested(false)
          })
      } else {
        const exit = confirm("Would you like to exit Preview Mode?")
        if (exit === true) {
          window.location.href = `/api/preview/exit?slug=${encodeURIComponent(
            window.location.pathname
          )}`
        } else return
      }
    }
  }

  return <br></br>
}

export default PreviewBar
