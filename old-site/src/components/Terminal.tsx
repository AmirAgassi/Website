import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import TerminalIcon from '@mui/icons-material/Terminal';

const Terminal = () => {
  const [lines, setLines] = useState(['┌──(root㉿kali)-[~]\n└─# ']);
  const [currentStep, setCurrentStep] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const commands = [
    { command: "whoami", response: "Amir Agassi" },
    { command: "cat amir_info.txt", response: "Wilfrid Laurier University, BSc Computer Science, Year 3\nWestern Governors University, BSc Cybersecurity & Information Assurance, Year 3" },
  ];

  useEffect(() => {
    const steps = [
      () => setTimeout(() => setCurrentStep(1), 500),
      () => setTimeout(() => setCurrentStep(2), 500),
      () => setTimeout(() => setCurrentStep(3), 500),
      () => setTimeout(() => setCurrentStep(4), 500),
      () => typeCommand(0),
      () => setTimeout(() => setCurrentStep(6), 500),
      () => setTimeout(() => setCurrentStep(7), 500),
      () => executeCommand(0),
      () => setTimeout(() => setCurrentStep(9), 500),
      () => setTimeout(() => setCurrentStep(10), 500),
      () => setTimeout(() => setCurrentStep(11), 500),
      () => setTimeout(() => setCurrentStep(12), 500),
      () => typeCommand(1),
      () => setTimeout(() => setCurrentStep(14), 500),
      () => setTimeout(() => setCurrentStep(15), 500),
      () => executeCommand(1),
      () => setIsIdle(true),
    ];

    if (currentStep < steps.length) {
      steps[currentStep]();
    }
  }, [currentStep]);

  useEffect(() => {
    let blinkInterval: string | number | NodeJS.Timer | undefined;
    if (isIdle) {
      blinkInterval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
    }
    return () => clearInterval(blinkInterval);
  }, [isIdle]);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [lines, currentInput]);

  const typeCommand = (index: number) => {
    const fullCommand = `┌──(root㉿kali)-[~]\n└─# ${commands[index].command}`;
    let i = lines[lines.length - 1].length;
    const interval = setInterval(() => {
      if (i < fullCommand.length) {
        setLines(prev => {
          const newLines = [...prev];
          newLines[newLines.length - 1] = fullCommand.slice(0, i + 1);
          return newLines;
        });
        i++;
      } else {
        clearInterval(interval);
        setCurrentStep(prev => prev + 1);
      }
    }, 100);
  };

  const executeCommand = (index: number) => {
    setLines(prev => [
      ...prev,
      commands[index].response,
      '┌──(root㉿kali)-[~]\n└─# '
    ]);
    setCurrentStep(prev => prev + 1);
  };

  const handleTerminalClick = () => {
    if (isIdle) {
      setIsInteractive(true);
      if (terminalRef.current) {
        terminalRef.current.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleCommand(currentInput);
      setCurrentInput('');
    } else if (event.key.length === 1) {
      setCurrentInput(prev => prev + event.key);
    } else if (event.key === 'Backspace') {
      setCurrentInput(prev => prev.slice(0, -1));
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = '';

    switch (trimmedCmd) {
      case 'help':
        response = 'Available commands: help, clear, whoami, easteregg';
        break;
      case 'clear':
        setLines(['┌──(root㉿kali)-[~]\n└─# ']);
        return;
      case 'whoami':
        response = 'Amir Agassi';
        break;
      case 'easteregg':
        setEasterEggActivated(true);
        response = 'Initiating Easter Egg sequence...\n\n' +
                   'Welcome to the Matrix, Neo.\n' +
                   'The rabbit hole goes deeper than you think.\n' +
                   'Try these special commands:\n' +
                   '- "redpill": See how deep the rabbit hole goes\n' +
                   '- "bluepill": Return to blissful ignorance\n' +
                   '- "followthewhiterabbit": ???';
        break;
      case 'redpill':
        if (easterEggActivated) {
          response = 'The Matrix has you...\n' +
                     'Wake up, Neo...\n' +
                     'The Matrix has you...\n' +
                     'Follow the white rabbit.\n' +
                     'Knock, knock, Neo.';
        } else {
          response = 'Command not found: redpill';
        }
        break;
      case 'bluepill':
        if (easterEggActivated) {
          response = 'You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.';
          setEasterEggActivated(false);
        } else {
          response = 'Command not found: bluepill';
        }
        break;
      case 'followthewhiterabbit':
        if (easterEggActivated) {
          response = 
            "You've gone down the rabbit hole!\n\n" +
            "     (\\(\\\n" +
            "     (-.-)\n" +
            "     o_(\")(\")\n\n" +
            "Congratulations! You've unlocked the secret rabbit. Hope that was worth it.";
        } else {
          response = 'Command not found: followthewhiterabbit';
        }
        break;
      default:
        response = `Command not found: ${trimmedCmd}`;
    }

    setLines(prev => [...prev.slice(0, -1), `┌──(root㉿kali)-[~]\n└─# ${cmd}`, response, '┌──(root㉿kali)-[~]\n└─# ']);
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(31, 34, 41, 0.7)',
        borderRadius: '10px', 
        fontFamily: '"DejaVu Sans Mono", monospace',
        height: '300px',
        width: '100%',
        maxWidth: '800px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #2E3440',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      onClick={handleTerminalClick}
      tabIndex={0}
      ref={terminalRef}
      onKeyDown={handleKeyPress}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(46, 52, 64, 0.7)',
        padding: '5px 10px',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <TerminalIcon sx={{ width: '20px', height: '20px', marginRight: '10px', color: '#D8DEE9' }} />
          <Typography variant="caption" sx={{ color: '#D8DEE9', flex: 1, textAlign: 'center' }}>
            root@kali: ~
          </Typography>
        </Box>
        <Box>
          <IconButton size="small" sx={{ color: '#D8DEE9', padding: '2px' }}>
            <MinimizeIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#D8DEE9', padding: '2px' }}>
            <CropSquareIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#D8DEE9', padding: '2px' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ 
        padding: '10px', 
        overflowY: 'auto',
        flexGrow: 1,
        position: 'relative',
        zIndex: 0,
      }}
      ref={terminalContentRef}
      >
        {lines.map((line, index) => (
          <Typography key={index} variant="body2" component="div" sx={{ 
            color: '#D8DEE9', 
            whiteSpace: 'pre-wrap',
            lineHeight: 1.6,
            '& .prompt': { color: '#88C0D0' },
            '& .command': { color: '#88C0D0' },
            '& .response': { color: '#D8DEE9' }
          }}>
            {index % 2 === 0 ? (
              <>
                <span className="prompt">{line.split('#')[0]}#</span>
                <span className="command">{line.split('#')[1]}</span>
              </>
            ) : (
              <span className="response">{line}</span>
            )}
            {index === lines.length - 1 && (
              <>
                {isInteractive && <span className="command">{currentInput}</span>}
                <span style={{
                  borderRight: '0.15em solid #D8DEE9',
                  animation: 'blink-caret .75s step-end infinite',
                  opacity: isIdle ? (currentStep % 2 === 0 ? 1 : 0) : ([0, 2, 4, 6, 9, 11, 13, 15].includes(currentStep) ? 0 : 1)
                }}></span>
              </>
            )}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Terminal;