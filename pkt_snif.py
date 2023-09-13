import subprocess
import time

def capture_packets():
    
    network_interface = "Wi-Fi"
    
    try:
        # Define the tshark command to capture packets and save them to a file
        command = [
            "tshark",
            "-i", network_interface,  # Replace with the appropriate network interface
            "-a", "duration:60",            # Capture for 60 seconds
            "-w", "packet_capture.pcap"      # Save captured packets to a file
        ]

        # Run the tshark command
        subprocess.run(command, check=True)

    except subprocess.CalledProcessError as e:
        print(f"Error running tshark: {e}")

if __name__ == "__main__":
    while True:
        capture_packets()
        print("Captured packets for 1 minute. Sleeping for 1 minute...")
        time.sleep(60)  # Sleep for 60 seconds before capturing again
