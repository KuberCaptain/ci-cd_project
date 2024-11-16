import React from 'react';
import { Shield, AlertCircle, Search, Bug, HardDrive, Binary, Lock } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Cybersecurity: React.FC = () => {
  const projects = [
    {
      title: "SOC Tier 1 Operations",
      icon: <AlertCircle className="w-6 h-6 text-cyan-400" />,
      description: "Led front-line security operations, managing incident detection, triage, and initial response for enterprise-level security events. Coordinated with different teams to escalate critical incidents and ensure rapid remediation. Continuously refined detection methods to reduce false positives and improve response accuracy, ultimately enhancing the overall security posture. Played a key role in monitoring, analyzing, and escalating security alerts while keeping stakeholders informed throughout the incident lifecycle.",
      tags: ["SIEM", "Splunk", "QRadar", "Incident Response", "Log Analysis", "Security Orchestration", "Elastic Stack", "Azure Sentinel"],
      metrics: [
        "Processed 1000+ alerts daily with 99.9% accuracy",
        "Reduced false positive rate by 45%",
        "Improved initial response time by 60%"
      ]
    },
    {
      title: "SOC Tier 2 Investigations",
      icon: <Search className="w-6 h-6 text-cyan-400" />,
      description: "Conducted in-depth security investigations and proactive threat hunting operations using advanced methodologies. Leveraged tools for behavioral analysis, deep packet inspection, and endpoint analysis to identify malicious activities and minimize risk exposure. Worked closely with various departments to provide insights and technical guidance on threat remediation. Developed custom detection rules, enhanced SOC playbooks, and played a key role in mitigating advanced persistent threats and sophisticated attack campaigns.",
      tags: ["Threat Hunting", "Forensics", "Malware Analysis", "Network Security", "Wireshark", "Zeek", "EDR Tools", "MISP"],
      metrics: [
        "Led 200+ complex incident investigations",
        "Developed 30+ custom detection rules",
        "Uncovered 3 APT campaigns"
      ]
    },
    {
      title: "Red Team Operations",
      icon: <Bug className="w-6 h-6 text-cyan-400 animate-bounce" />,
      description: "Executed comprehensive red team engagements to identify weaknesses in security defenses and provide actionable recommendations to bolster resilience. Activities included simulated attacks through penetration testing, social engineering, and web application exploitation to measure the effectiveness of existing security controls. Collaborated with the blue team to share findings, conduct attack simulations, and validate defenses, ensuring continuous improvement of organizational security measures.",
      tags: ["Penetration Testing", "Social Engineering", "Network Security", "Web Security", "Metasploit", "Cobalt Strike", "Burp Suite", "Nmap"],
      metrics: [
        "Conducted 20+ red team exercises",
        "Identified 150+ critical vulnerabilities",
        "Achieved 90% success rate in phishing campaigns"
      ]
    },
    {
      title: "Malware Analysis Lab",
      icon: <Binary className="w-6 h-6 text-cyan-400" />,
      description: "Established and managed a dedicated malware analysis lab for reverse engineering, dissecting malware, and generating threat intelligence. Performed both static and dynamic analysis to understand the capabilities and behaviors of different malware strains. Provided detailed reports and actionable insights to the security team, contributing to the development of signatures and detection mechanisms to prevent further compromise. Published threat intelligence reports to keep stakeholders informed on emerging threats.",
      tags: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering", "IDA Pro", "Ghidra", "OllyDbg", "Sandboxie", "YARA"],
      metrics: [
        "Analyzed 500+ malware samples",
        "Created 25+ YARA rules",
        "Published 10 threat intelligence reports"
      ]
    },
    {
      title: "OSINT (Open Source Intelligence)",
      icon: <HardDrive className="w-6 h-6 text-cyan-400" />,
      description: "Performed OSINT investigations to gather information from publicly available sources, providing insights for threat intelligence, risk assessments, and proactive threat identification. Utilized a wide range of tools and methodologies to uncover relevant data across social media, forums, and public databases. Analyzed and correlated information to support security operations, identify potential risks, and assist in ongoing investigations. Produced detailed reports that provided actionable intelligence to improve decision-making processes and strengthen overall security posture.",
      tags: ["OSINT Tools", "Social Media Analysis", "Public Database Searches", "Maltego", "Shodan", "Intelligence X", "Censys", "Google Dorks"],
      metrics: [
        "Completed 50+ OSINT investigations",
        "Recovered 2TB+ of critical data",
        "Reduced investigation time by 40%"
      ]
    },
    {
      title: "Security Infrastructure",
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      description: "Managed and optimized enterprise security infrastructure using leading security solutions to protect against evolving threats. Responsibilities included configuring and maintaining firewalls, intrusion detection/prevention systems, and endpoint security tools. Implemented and monitored security policies across the infrastructure, ensuring compliance and minimizing vulnerabilities. Optimized the security architecture for 10,000+ endpoints to achieve a balance between performance and protection, resulting in high uptime and enhanced network defense capabilities.",
      tags: ["Fortinet", "CheckPoint", "Palo Alto", "FireEye", "Cisco ASA", "IDS/IPS", "SIEM Integration", "Zero Trust"],
      metrics: [
        "Managed security for 10,000+ endpoints",
        "Achieved 99.99% firewall uptime",
        "Blocked 1M+ attacks monthly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="relative h-[40vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="relative text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Cybersecurity Operations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced threat detection, incident response, and security engineering
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Lock className="w-6 h-6 text-cyan-400 animate-pulse hover:animate-spin transition-all duration-300" />
            Security Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-cyan-400">Security Tools</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Fortinet Security Fabric</li>
                <li>CheckPoint Security Gateway</li>
                <li>Splunk Enterprise Security</li>
                <li>IBM QRadar SIEM</li>
                <li>Palo Alto Networks Firewall</li>
                <li>Cisco ASA</li>
                <li>FireEye Endpoint Security</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-cyan-400">Analysis Skills</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Malware Analysis & Reverse Engineering</li>
                <li>Network Protocol Analysis</li>
                <li>OSINT & Threat Intelligence</li>
                <li>Incident Response</li>
                <li>Memory Forensics</li>
                <li>Threat Hunting</li>
                <li>Digital Forensics</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-cyan-400">Training & Courses</h3>
              <ul className="text-gray-300 space-y-1">
                <li>TryHackMe - SOC Level 1 & 2</li>
                <li>TryHackMe - CompTIA Path</li>
                <li>TryHackMe - Red Team Path</li>
                <li>TryHackMe - Network Pentesting</li>
                <li>Fortinet NSE Training Institute</li>
                <li>Splunk Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cybersecurity;