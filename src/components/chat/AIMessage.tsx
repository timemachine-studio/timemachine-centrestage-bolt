import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle } from 'lucide-react';
import { MessageProps } from '../../types/chat';
import { fadeInScale, textGlowStyle } from '../../utils/animations';

export function AIMessage({ content, isLoading }: MessageProps) {
  const isError = content.includes('API key');

  return (
    <motion.div
      {...fadeInScale}
      className="text-center px-8 max-w-5xl mx-auto"
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center gap-4">
          <AlertCircle className="w-8 h-8 text-yellow-500" />
          <p className="text-xl text-yellow-500">{content}</p>
        </div>
      ) : (
        <motion.p
          className="ai-message text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          style={textGlowStyle}
        >
          {content}
        </motion.p>
      )}
    </motion.div>
  );
}