import React, { useState } from 'react'
import { X, Download, Gamepad2, Smartphone, ShieldCheck, Trophy, Sparkles, Sliders, ChevronRight } from 'lucide-react'

export default function GameDetailsModal({ isOpen, onClose, onOpenDownload }) {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="glass-panel w-full max-w-2xl rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Artwork Banner */}
        <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-slate-800/80 pb-6">
          <img
            src="/assets/hillbound_vaishu_icon.jpg"
            alt="Hillbound Vaishu Game Icon"
            className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-700 shadow-xl"
          />
          <div className="space-y-1 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-bold text-[#FF9900] uppercase tracking-wider inline-block">
              DEVLOOP STUDIOS • ANDROID EXCLUSIVE
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              HILLBOUND VAISHU
            </h3>
            <p className="text-xs text-slate-300 italic font-medium">
              “A wild ride. One hill at a time.”
            </p>
          </div>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 my-5 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#00A3FF] text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('controls')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'controls'
                ? 'bg-[#00A3FF] text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Controls & Gameplay
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'specs'
                ? 'bg-[#00A3FF] text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            System Specs
          </button>
        </div>

        {/* Tab Content: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <p className="text-sm text-slate-200">
              <strong className="text-white">HILLBOUND VAISHU</strong> is an energetic off-road hill-climb adventure developed by <strong className="text-[#00A3FF]">DEVLOOP STUDIOS</strong> exclusively for Android.
            </p>
            <p>
              Tackle steep mountain inclines, master 4x4 vehicle weight distribution, collect gold coins scattered along high-risk ledges, and upgrade your engine, tires, and suspension to conquer increasingly difficult hills.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white text-xs block mb-1">🎮 Physics-Based Touch Controls</span>
                <p className="text-[11px] text-slate-400">Responsive Android touch pedals for acceleration, tilt, and balance.</p>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white text-xs block mb-1">🪙 Vehicle Upgrades</span>
                <p className="text-[11px] text-slate-400">Use collected coins to boost engine horsepower, tire grip, and 4WD drive.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Controls */}
        {activeTab === 'controls' && (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#00A3FF]" /> Android Touch Controls
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Gas Pedal:</span>
                  <span className="font-bold text-white">Touch Right Screen</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Brake / Reverse:</span>
                  <span className="font-bold text-white">Touch Left Screen</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Air Balance Left:</span>
                  <span className="font-bold text-white">Tilt Left Button</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Air Balance Right:</span>
                  <span className="font-bold text-white">Tilt Right Button</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                Mobile Performance
              </h4>
              <p className="text-[11px] text-slate-400">
                Optimized for smooth 60 FPS gameplay on Android smartphones and tablets.
              </p>
            </div>
          </div>
        )}

        {/* Tab Content: System Specs */}
        {activeTab === 'specs' && (
          <div className="space-y-3 text-xs text-slate-300">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider text-[#FF9900]">
                Android System Requirements
              </h4>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>• <strong>OS:</strong> Android 7.0 (Nougat) or higher</li>
                <li>• <strong>RAM:</strong> 2 GB RAM minimum</li>
                <li>• <strong>APK Package Size:</strong> 102 MB</li>
                <li>• <strong>Storage Space:</strong> ~150 MB available storage</li>
                <li>• <strong>Platform Notice:</strong> Android Exclusive (PC version planned for future release)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400">
            Official Studio Release • 100% Free APK (102 MB)
          </span>
          <button
            onClick={() => {
              onClose()
              onOpenDownload()
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7700] to-[#FF9900] hover:from-[#EE6600] hover:to-[#EE8800] shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD APK (102 MB)</span>
          </button>
        </div>

      </div>
    </div>
  )
}
