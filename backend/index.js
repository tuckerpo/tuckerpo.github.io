const express = require('express');
const app = express();

app.get('/short-resume', (req, res) => {
    const shortResume = [
        { name: 'Tucker J. Polomik', where: 'Colorado, USA', provides: '7+ years of systems programming expertise, engineering team leadership, and a breadth of technical experience. Everything from bare-metal assembly to FPGA gateware, to Linux kernel patches to front-end web dev.', wants: 'Industrious, fun team', contact: 'tuckerpo@buffalo.edu', social: 'https://linkedin.com/in/tuckerpo'},
        { company: 'CableLabs (https://cablelabs.com)', role: 'Lead Software Architect', years: 2.5, skills: ['802.11', 'hostapd', 'Linux kernel', 'embedded C/C++', 'full-stack', 'public speaking', 'research']},
        { company: 'QSC (https://www.qsc.com/)', role: 'Software Engineer', years: 1, skills: ['C#', 'C++', 'Qt', 'Linux kernel (PCIe subsystem)', 'asan', 'gdb/kgdb', 'audio codecs', 'RPC', 'real-time audio/video'] },
        { company: 'INFICON (https://www.inficon.com/en)', role: 'Software Engineering Lead', years: 3.5, skills: ['C++', 'dsp', 'Linux kernel', 'TCP/IP', 'leadership', 'hiring', 'mentoring', 'embedded Linux'] },
        { company: 'KGB Aviation Solutions (https://kgbaviation.com/)', role: 'Firmware Engineering Intern', years: .5, skills: ['C', 'Python', 'reverse engineering', 'analog electronics', 'CAD']},
        { education: 'University at Buffalo School of Engineering & Applied Sciences', major: 'Computer Engineering' },
    ];
    res.json(shortResume);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
