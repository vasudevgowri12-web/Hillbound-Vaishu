import React, { useState, useEffect } from 'react'
import { X, Download, CheckCircle2, ShieldCheck, ExternalLink, RefreshCw } from 'lucide-react'

export default function DownloadModal({ isOpen, onClose }) {
  const [downloadState, setDownloadState] = useState('idle') // idle | redirecting

  const MEDIAFIRE_URL = 'https://www.mediafire.com/file/si1pkkvv5w93ie2/Hillbound_Vaishu.apk/file'

  useEffect(() => {
    if (!isOpen) {
      setDownloadState('idle')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleStartDownload = () => {
    setDownloadState('redirecting')

    // Redirect to MediaFire hosted APK link in a new window/tab
    window.open(MEDIAFIRE_URL, '_blank', 'noopener,noreferrer')

    setTimeout(() => {
      setDownloadState('completed')
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-panel w-full max-w-lg rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5">
          <img
            src="/assets/hillbound_vaishu_icon.jpg"
            alt="Hillbound Vaishu Icon"
            className="w-16 h-16 rounded-2xl object-cover border border-slate-700 shadow-md"
          />
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              MEDIAFIRE SECURE HOST
            </div>
            <h3 className="font-heading font-black text-xl text-white uppercase">
              HILLBOUND VAISHU
            </h3>
            <p className="text-xs text-slate-400 font-semibold">
              DEVLOOP STUDIOS • Version 1.0.0 (APK)
            </p>
          </div>
        </div>

        {/* Package Specs Grid */}
        <div className="grid grid-cols-2 gap-3 my-5">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">FILE SIZE</span>
            <span className="font-heading font-bold text-sm text-white">102 MB (APK)</span>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">PLATFORM</span>
            <span className="font-heading font-bold text-sm text-[#00A3FF]">Android Only</span>
          </div>
        </div>

        {/* Download State Content */}
        {downloadState === 'idle' && (
          <div className="space-y-5">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Official MediaFire Mirror Link</span>
              </div>
              <p>
                Clicking download will redirect you directly to the official MediaFire host for `Hillbound_Vaishu.apk` (102 MB).
              </p>
            </div>

            <button
              onClick={handleStartDownload}
              className="w-full py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7700] via-[#FF9900] to-[#FF5500] hover:from-[#EE6600] hover:to-[#EE4400] shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD APK VIA MEDIAFIRE</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </button>
          </div>
        )}

        {downloadState === 'redirecting' && (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-[#FF9900] border-t-transparent animate-spin mx-auto" />
            <div>
              <h4 className="font-heading font-bold text-base text-white uppercase">
                REDIRECTING TO MEDIAFIRE...
              </h4>
              <p className="text-xs text-slate-400 mt-1">Opening official download page for Hillbound_Vaishu.apk</p>
            </div>
          </div>
        )}

        {downloadState === 'completed' && (
          <div className="py-4 space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-black text-lg text-white uppercase">
                MEDIAFIRE PAGE OPENED!
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                The MediaFire download page has opened in a new tab.
              </p>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 text-slate-300">
              <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
                Next Steps on MediaFire:
              </span>
              <p>1. Tap the big green <strong>"DOWNLOAD"</strong> button on MediaFire.</p>
              <p>2. Once downloaded, open `Hillbound_Vaishu.apk` to install.</p>
              <p>3. Enjoy playing Hillbound Vaishu!</p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleStartDownload}
                className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>RE-OPEN MEDIAFIRE</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white uppercase tracking-wider cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
